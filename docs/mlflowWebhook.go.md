# `mlflowWebhook` Submodule <a name="`mlflowWebhook` Submodule" id="@cdktf/provider-databricks.mlflowWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MlflowWebhook <a name="MlflowWebhook" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook databricks_mlflow_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

mlflowwebhook.NewMlflowWebhook(scope Construct, id *string, config MlflowWebhookConfig) MlflowWebhook
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig">MlflowWebhookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig">MlflowWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec">PutHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec">ResetHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec">ResetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName">ResetModelName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHttpUrlSpec` <a name="PutHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec"></a>

```go
func PutHttpUrlSpec(value MlflowWebhookHttpUrlSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putHttpUrlSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec"></a>

```go
func PutJobSpec(value MlflowWebhookJobSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHttpUrlSpec` <a name="ResetHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetHttpUrlSpec"></a>

```go
func ResetHttpUrlSpec()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetId"></a>

```go
func ResetId()
```

##### `ResetJobSpec` <a name="ResetJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetJobSpec"></a>

```go
func ResetJobSpec()
```

##### `ResetModelName` <a name="ResetModelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetModelName"></a>

```go
func ResetModelName()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.resetStatus"></a>

```go
func ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MlflowWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

mlflowwebhook.MlflowWebhook_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

mlflowwebhook.MlflowWebhook_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

mlflowwebhook.MlflowWebhook_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

mlflowwebhook.MlflowWebhook_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MlflowWebhook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MlflowWebhook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MlflowWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MlflowWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec">HttpUrlSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput">EventsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput">HttpUrlSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput">JobSpecInput</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput">ModelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.events">Events</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName">ModelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HttpUrlSpec`<sup>Required</sup> <a name="HttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpec"></a>

```go
func HttpUrlSpec() MlflowWebhookHttpUrlSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference">MlflowWebhookHttpUrlSpecOutputReference</a>

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpec"></a>

```go
func JobSpec() MlflowWebhookJobSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference">MlflowWebhookJobSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventsInput`<sup>Optional</sup> <a name="EventsInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.eventsInput"></a>

```go
func EventsInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpUrlSpecInput`<sup>Optional</sup> <a name="HttpUrlSpecInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.httpUrlSpecInput"></a>

```go
func HttpUrlSpecInput() MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.jobSpecInput"></a>

```go
func JobSpecInput() MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---

##### `ModelNameInput`<sup>Optional</sup> <a name="ModelNameInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelNameInput"></a>

```go
func ModelNameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.events"></a>

```go
func Events() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModelName`<sup>Required</sup> <a name="ModelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.modelName"></a>

```go
func ModelName() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhook.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MlflowWebhookConfig <a name="MlflowWebhookConfig" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

&mlflowwebhook.MlflowWebhookConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Events: *[]*string,
	Description: *string,
	HttpUrlSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec,
	Id: *string,
	JobSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks.mlflowWebhook.MlflowWebhookJobSpec,
	ModelName: *string,
	Status: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events">Events</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec">HttpUrlSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | http_url_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | job_spec block. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName">ModelName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Events`<sup>Required</sup> <a name="Events" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.events"></a>

```go
Events *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#events MlflowWebhook#events}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#description MlflowWebhook#description}.

---

##### `HttpUrlSpec`<sup>Optional</sup> <a name="HttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.httpUrlSpec"></a>

```go
HttpUrlSpec MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

http_url_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#http_url_spec MlflowWebhook#http_url_spec}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#id MlflowWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `JobSpec`<sup>Optional</sup> <a name="JobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.jobSpec"></a>

```go
JobSpec MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

job_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#job_spec MlflowWebhook#job_spec}

---

##### `ModelName`<sup>Optional</sup> <a name="ModelName" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.modelName"></a>

```go
ModelName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#model_name MlflowWebhook#model_name}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#status MlflowWebhook#status}.

---

### MlflowWebhookHttpUrlSpec <a name="MlflowWebhookHttpUrlSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

&mlflowwebhook.MlflowWebhookHttpUrlSpec {
	Url: *string,
	Authorization: *string,
	EnableSslVerification: interface{},
	Secret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization">Authorization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification">EnableSslVerification</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret">Secret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#url MlflowWebhook#url}.

---

##### `Authorization`<sup>Optional</sup> <a name="Authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.authorization"></a>

```go
Authorization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#authorization MlflowWebhook#authorization}.

---

##### `EnableSslVerification`<sup>Optional</sup> <a name="EnableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.enableSslVerification"></a>

```go
EnableSslVerification interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#enable_ssl_verification MlflowWebhook#enable_ssl_verification}.

---

##### `Secret`<sup>Optional</sup> <a name="Secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec.property.secret"></a>

```go
Secret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#secret MlflowWebhook#secret}.

---

### MlflowWebhookJobSpec <a name="MlflowWebhookJobSpec" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

&mlflowwebhook.MlflowWebhookJobSpec {
	AccessToken: *string,
	JobId: *string,
	WorkspaceUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken">AccessToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId">JobId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl">WorkspaceUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}. |

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.accessToken"></a>

```go
AccessToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#access_token MlflowWebhook#access_token}.

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.jobId"></a>

```go
JobId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#job_id MlflowWebhook#job_id}.

---

##### `WorkspaceUrl`<sup>Optional</sup> <a name="WorkspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec.property.workspaceUrl"></a>

```go
WorkspaceUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.51.0/docs/resources/mlflow_webhook#workspace_url MlflowWebhook#workspace_url}.

---

## Classes <a name="Classes" id="Classes"></a>

### MlflowWebhookHttpUrlSpecOutputReference <a name="MlflowWebhookHttpUrlSpecOutputReference" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

mlflowwebhook.NewMlflowWebhookHttpUrlSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MlflowWebhookHttpUrlSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization">ResetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification">ResetEnableSslVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret">ResetSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorization` <a name="ResetAuthorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetAuthorization"></a>

```go
func ResetAuthorization()
```

##### `ResetEnableSslVerification` <a name="ResetEnableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetEnableSslVerification"></a>

```go
func ResetEnableSslVerification()
```

##### `ResetSecret` <a name="ResetSecret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.resetSecret"></a>

```go
func ResetSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput">AuthorizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput">EnableSslVerificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput">SecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization">Authorization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification">EnableSslVerification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret">Secret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationInput`<sup>Optional</sup> <a name="AuthorizationInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorizationInput"></a>

```go
func AuthorizationInput() *string
```

- *Type:* *string

---

##### `EnableSslVerificationInput`<sup>Optional</sup> <a name="EnableSslVerificationInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerificationInput"></a>

```go
func EnableSslVerificationInput() interface{}
```

- *Type:* interface{}

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secretInput"></a>

```go
func SecretInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Authorization`<sup>Required</sup> <a name="Authorization" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.authorization"></a>

```go
func Authorization() *string
```

- *Type:* *string

---

##### `EnableSslVerification`<sup>Required</sup> <a name="EnableSslVerification" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.enableSslVerification"></a>

```go
func EnableSslVerification() interface{}
```

- *Type:* interface{}

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.secret"></a>

```go
func Secret() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() MlflowWebhookHttpUrlSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookHttpUrlSpec">MlflowWebhookHttpUrlSpec</a>

---


### MlflowWebhookJobSpecOutputReference <a name="MlflowWebhookJobSpecOutputReference" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mlflowwebhook"

mlflowwebhook.NewMlflowWebhookJobSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) MlflowWebhookJobSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl">ResetWorkspaceUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkspaceUrl` <a name="ResetWorkspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.resetWorkspaceUrl"></a>

```go
func ResetWorkspaceUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput">JobIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput">WorkspaceUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken">AccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId">JobId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl">WorkspaceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() *string
```

- *Type:* *string

---

##### `JobIdInput`<sup>Optional</sup> <a name="JobIdInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobIdInput"></a>

```go
func JobIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceUrlInput`<sup>Optional</sup> <a name="WorkspaceUrlInput" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrlInput"></a>

```go
func WorkspaceUrlInput() *string
```

- *Type:* *string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.accessToken"></a>

```go
func AccessToken() *string
```

- *Type:* *string

---

##### `JobId`<sup>Required</sup> <a name="JobId" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.jobId"></a>

```go
func JobId() *string
```

- *Type:* *string

---

##### `WorkspaceUrl`<sup>Required</sup> <a name="WorkspaceUrl" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.workspaceUrl"></a>

```go
func WorkspaceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() MlflowWebhookJobSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.mlflowWebhook.MlflowWebhookJobSpec">MlflowWebhookJobSpec</a>

---



