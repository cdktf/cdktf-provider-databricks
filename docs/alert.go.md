# `alert` Submodule <a name="`alert` Submodule" id="@cdktf/provider-databricks.alert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Alert <a name="Alert" id="@cdktf/provider-databricks.alert.Alert"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert databricks_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.Alert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.NewAlert(scope Construct, id *string, config AlertConfig) Alert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConfig">AlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.alert.Alert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConfig">AlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetCustomBody">ResetCustomBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetCustomSubject">ResetCustomSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetNotifyOnOk">ResetNotifyOnOk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetOwnerUserName">ResetOwnerUserName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetParentPath">ResetParentPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.resetSecondsToRetrigger">ResetSecondsToRetrigger</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alert.Alert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.alert.Alert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.alert.Alert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.Alert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.alert.Alert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.alert.Alert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.alert.Alert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.alert.Alert.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.alert.Alert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.alert.Alert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.alert.Alert.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.alert.Alert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alert.Alert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alert.Alert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alert.Alert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alert.Alert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alert.Alert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alert.Alert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.alert.Alert.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.alert.Alert.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alert.Alert.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alert.Alert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.Alert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.alert.Alert.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.alert.Alert.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.alert.Alert.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.alert.Alert.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.alert.Alert.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.alert.Alert.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-databricks.alert.Alert.putCondition"></a>

```go
func PutCondition(value AlertCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.Alert.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

---

##### `ResetCustomBody` <a name="ResetCustomBody" id="@cdktf/provider-databricks.alert.Alert.resetCustomBody"></a>

```go
func ResetCustomBody()
```

##### `ResetCustomSubject` <a name="ResetCustomSubject" id="@cdktf/provider-databricks.alert.Alert.resetCustomSubject"></a>

```go
func ResetCustomSubject()
```

##### `ResetNotifyOnOk` <a name="ResetNotifyOnOk" id="@cdktf/provider-databricks.alert.Alert.resetNotifyOnOk"></a>

```go
func ResetNotifyOnOk()
```

##### `ResetOwnerUserName` <a name="ResetOwnerUserName" id="@cdktf/provider-databricks.alert.Alert.resetOwnerUserName"></a>

```go
func ResetOwnerUserName()
```

##### `ResetParentPath` <a name="ResetParentPath" id="@cdktf/provider-databricks.alert.Alert.resetParentPath"></a>

```go
func ResetParentPath()
```

##### `ResetSecondsToRetrigger` <a name="ResetSecondsToRetrigger" id="@cdktf/provider-databricks.alert.Alert.resetSecondsToRetrigger"></a>

```go
func ResetSecondsToRetrigger()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.alert.Alert.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.Alert_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alert.Alert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.alert.Alert.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.Alert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alert.Alert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.alert.Alert.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.Alert_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.alert.Alert.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.Alert_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Alert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Alert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Alert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.alert.Alert.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Alert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference">AlertConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.lifecycleState">LifecycleState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.triggerTime">TriggerTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.customBodyInput">CustomBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.customSubjectInput">CustomSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.notifyOnOkInput">NotifyOnOkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.ownerUserNameInput">OwnerUserNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.parentPathInput">ParentPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.queryIdInput">QueryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.secondsToRetriggerInput">SecondsToRetriggerInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.customBody">CustomBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.customSubject">CustomSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.notifyOnOk">NotifyOnOk</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.parentPath">ParentPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.queryId">QueryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.secondsToRetrigger">SecondsToRetrigger</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.alert.Alert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.alert.Alert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alert.Alert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.alert.Alert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.alert.Alert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.alert.Alert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.alert.Alert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.alert.Alert.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.alert.Alert.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.alert.Alert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.alert.Alert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.alert.Alert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.alert.Alert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.alert.Alert.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-databricks.alert.Alert.property.condition"></a>

```go
func Condition() AlertConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference">AlertConditionOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.alert.Alert.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.alert.Alert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-databricks.alert.Alert.property.lifecycleState"></a>

```go
func LifecycleState() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-databricks.alert.Alert.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TriggerTime`<sup>Required</sup> <a name="TriggerTime" id="@cdktf/provider-databricks.alert.Alert.property.triggerTime"></a>

```go
func TriggerTime() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-databricks.alert.Alert.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-databricks.alert.Alert.property.conditionInput"></a>

```go
func ConditionInput() AlertCondition
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

---

##### `CustomBodyInput`<sup>Optional</sup> <a name="CustomBodyInput" id="@cdktf/provider-databricks.alert.Alert.property.customBodyInput"></a>

```go
func CustomBodyInput() *string
```

- *Type:* *string

---

##### `CustomSubjectInput`<sup>Optional</sup> <a name="CustomSubjectInput" id="@cdktf/provider-databricks.alert.Alert.property.customSubjectInput"></a>

```go
func CustomSubjectInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.alert.Alert.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `NotifyOnOkInput`<sup>Optional</sup> <a name="NotifyOnOkInput" id="@cdktf/provider-databricks.alert.Alert.property.notifyOnOkInput"></a>

```go
func NotifyOnOkInput() interface{}
```

- *Type:* interface{}

---

##### `OwnerUserNameInput`<sup>Optional</sup> <a name="OwnerUserNameInput" id="@cdktf/provider-databricks.alert.Alert.property.ownerUserNameInput"></a>

```go
func OwnerUserNameInput() *string
```

- *Type:* *string

---

##### `ParentPathInput`<sup>Optional</sup> <a name="ParentPathInput" id="@cdktf/provider-databricks.alert.Alert.property.parentPathInput"></a>

```go
func ParentPathInput() *string
```

- *Type:* *string

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="@cdktf/provider-databricks.alert.Alert.property.queryIdInput"></a>

```go
func QueryIdInput() *string
```

- *Type:* *string

---

##### `SecondsToRetriggerInput`<sup>Optional</sup> <a name="SecondsToRetriggerInput" id="@cdktf/provider-databricks.alert.Alert.property.secondsToRetriggerInput"></a>

```go
func SecondsToRetriggerInput() *f64
```

- *Type:* *f64

---

##### `CustomBody`<sup>Required</sup> <a name="CustomBody" id="@cdktf/provider-databricks.alert.Alert.property.customBody"></a>

```go
func CustomBody() *string
```

- *Type:* *string

---

##### `CustomSubject`<sup>Required</sup> <a name="CustomSubject" id="@cdktf/provider-databricks.alert.Alert.property.customSubject"></a>

```go
func CustomSubject() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.alert.Alert.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `NotifyOnOk`<sup>Required</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.alert.Alert.property.notifyOnOk"></a>

```go
func NotifyOnOk() interface{}
```

- *Type:* interface{}

---

##### `OwnerUserName`<sup>Required</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.alert.Alert.property.ownerUserName"></a>

```go
func OwnerUserName() *string
```

- *Type:* *string

---

##### `ParentPath`<sup>Required</sup> <a name="ParentPath" id="@cdktf/provider-databricks.alert.Alert.property.parentPath"></a>

```go
func ParentPath() *string
```

- *Type:* *string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.alert.Alert.property.queryId"></a>

```go
func QueryId() *string
```

- *Type:* *string

---

##### `SecondsToRetrigger`<sup>Required</sup> <a name="SecondsToRetrigger" id="@cdktf/provider-databricks.alert.Alert.property.secondsToRetrigger"></a>

```go
func SecondsToRetrigger() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.Alert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.alert.Alert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AlertCondition <a name="AlertCondition" id="@cdktf/provider-databricks.alert.AlertCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

&alert.AlertCondition {
	Op: *string,
	Operand: github.com/cdktf/cdktf-provider-databricks-go/databricks.alert.AlertConditionOperand,
	EmptyResultState: *string,
	Threshold: github.com/cdktf/cdktf-provider-databricks-go/databricks.alert.AlertConditionThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertCondition.property.op">Op</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#op Alert#op}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertCondition.property.operand">Operand</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a></code> | operand block. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertCondition.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#empty_result_state Alert#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertCondition.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a></code> | threshold block. |

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.alert.AlertCondition.property.op"></a>

```go
Op *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#op Alert#op}.

---

##### `Operand`<sup>Required</sup> <a name="Operand" id="@cdktf/provider-databricks.alert.AlertCondition.property.operand"></a>

```go
Operand AlertConditionOperand
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a>

operand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#operand Alert#operand}

---

##### `EmptyResultState`<sup>Optional</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.alert.AlertCondition.property.emptyResultState"></a>

```go
EmptyResultState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#empty_result_state Alert#empty_result_state}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-databricks.alert.AlertCondition.property.threshold"></a>

```go
Threshold AlertConditionThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#threshold Alert#threshold}

---

### AlertConditionOperand <a name="AlertConditionOperand" id="@cdktf/provider-databricks.alert.AlertConditionOperand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConditionOperand.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

&alert.AlertConditionOperand {
	Column: github.com/cdktf/cdktf-provider-databricks-go/databricks.alert.AlertConditionOperandColumn,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperand.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a></code> | column block. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.alert.AlertConditionOperand.property.column"></a>

```go
Column AlertConditionOperandColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a>

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#column Alert#column}

---

### AlertConditionOperandColumn <a name="AlertConditionOperandColumn" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

&alert.AlertConditionOperandColumn {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#name Alert#name}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumn.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#name Alert#name}.

---

### AlertConditionThreshold <a name="AlertConditionThreshold" id="@cdktf/provider-databricks.alert.AlertConditionThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConditionThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

&alert.AlertConditionThreshold {
	Value: github.com/cdktf/cdktf-provider-databricks-go/databricks.alert.AlertConditionThresholdValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a></code> | value block. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.alert.AlertConditionThreshold.property.value"></a>

```go
Value AlertConditionThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a>

value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#value Alert#value}

---

### AlertConditionThresholdValue <a name="AlertConditionThresholdValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

&alert.AlertConditionThresholdValue {
	BoolValue: interface{},
	DoubleValue: *f64,
	StringValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#bool_value Alert#bool_value}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#double_value Alert#double_value}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.stringValue">StringValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#string_value Alert#string_value}. |

---

##### `BoolValue`<sup>Optional</sup> <a name="BoolValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.boolValue"></a>

```go
BoolValue interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#bool_value Alert#bool_value}.

---

##### `DoubleValue`<sup>Optional</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.doubleValue"></a>

```go
DoubleValue *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#double_value Alert#double_value}.

---

##### `StringValue`<sup>Optional</sup> <a name="StringValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValue.property.stringValue"></a>

```go
StringValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#string_value Alert#string_value}.

---

### AlertConfig <a name="AlertConfig" id="@cdktf/provider-databricks.alert.AlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.alert.AlertConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

&alert.AlertConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Condition: github.com/cdktf/cdktf-provider-databricks-go/databricks.alert.AlertCondition,
	DisplayName: *string,
	QueryId: *string,
	CustomBody: *string,
	CustomSubject: *string,
	NotifyOnOk: interface{},
	OwnerUserName: *string,
	ParentPath: *string,
	SecondsToRetrigger: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#display_name Alert#display_name}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.queryId">QueryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#query_id Alert#query_id}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.customBody">CustomBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#custom_body Alert#custom_body}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.customSubject">CustomSubject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#custom_subject Alert#custom_subject}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.notifyOnOk">NotifyOnOk</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#notify_on_ok Alert#notify_on_ok}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.ownerUserName">OwnerUserName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#owner_user_name Alert#owner_user_name}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.parentPath">ParentPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#parent_path Alert#parent_path}. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConfig.property.secondsToRetrigger">SecondsToRetrigger</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#seconds_to_retrigger Alert#seconds_to_retrigger}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.alert.AlertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.alert.AlertConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.alert.AlertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.alert.AlertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.alert.AlertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.alert.AlertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.alert.AlertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-databricks.alert.AlertConfig.property.condition"></a>

```go
Condition AlertCondition
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#condition Alert#condition}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.alert.AlertConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#display_name Alert#display_name}.

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.alert.AlertConfig.property.queryId"></a>

```go
QueryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#query_id Alert#query_id}.

---

##### `CustomBody`<sup>Optional</sup> <a name="CustomBody" id="@cdktf/provider-databricks.alert.AlertConfig.property.customBody"></a>

```go
CustomBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#custom_body Alert#custom_body}.

---

##### `CustomSubject`<sup>Optional</sup> <a name="CustomSubject" id="@cdktf/provider-databricks.alert.AlertConfig.property.customSubject"></a>

```go
CustomSubject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#custom_subject Alert#custom_subject}.

---

##### `NotifyOnOk`<sup>Optional</sup> <a name="NotifyOnOk" id="@cdktf/provider-databricks.alert.AlertConfig.property.notifyOnOk"></a>

```go
NotifyOnOk interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#notify_on_ok Alert#notify_on_ok}.

---

##### `OwnerUserName`<sup>Optional</sup> <a name="OwnerUserName" id="@cdktf/provider-databricks.alert.AlertConfig.property.ownerUserName"></a>

```go
OwnerUserName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#owner_user_name Alert#owner_user_name}.

---

##### `ParentPath`<sup>Optional</sup> <a name="ParentPath" id="@cdktf/provider-databricks.alert.AlertConfig.property.parentPath"></a>

```go
ParentPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#parent_path Alert#parent_path}.

---

##### `SecondsToRetrigger`<sup>Optional</sup> <a name="SecondsToRetrigger" id="@cdktf/provider-databricks.alert.AlertConfig.property.secondsToRetrigger"></a>

```go
SecondsToRetrigger *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/resources/alert#seconds_to_retrigger Alert#seconds_to_retrigger}.

---

## Classes <a name="Classes" id="Classes"></a>

### AlertConditionOperandColumnOutputReference <a name="AlertConditionOperandColumnOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.NewAlertConditionOperandColumnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertConditionOperandColumnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertConditionOperandColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a>

---


### AlertConditionOperandOutputReference <a name="AlertConditionOperandOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.NewAlertConditionOperandOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertConditionOperandOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.putColumn">PutColumn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutColumn` <a name="PutColumn" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.putColumn"></a>

```go
func PutColumn(value AlertConditionOperandColumn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.putColumn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.column">Column</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference">AlertConditionOperandColumnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.columnInput">ColumnInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.column"></a>

```go
func Column() AlertConditionOperandColumnOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumnOutputReference">AlertConditionOperandColumnOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.columnInput"></a>

```go
func ColumnInput() AlertConditionOperandColumn
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandColumn">AlertConditionOperandColumn</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertConditionOperand
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a>

---


### AlertConditionOutputReference <a name="AlertConditionOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.NewAlertConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.putOperand">PutOperand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.resetEmptyResultState">ResetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOperand` <a name="PutOperand" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.putOperand"></a>

```go
func PutOperand(value AlertConditionOperand)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.putOperand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a>

---

##### `PutThreshold` <a name="PutThreshold" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.putThreshold"></a>

```go
func PutThreshold(value AlertConditionThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a>

---

##### `ResetEmptyResultState` <a name="ResetEmptyResultState" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.resetEmptyResultState"></a>

```go
func ResetEmptyResultState()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.operand">Operand</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference">AlertConditionOperandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.threshold">Threshold</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference">AlertConditionThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.emptyResultStateInput">EmptyResultStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.operandInput">OperandInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.opInput">OpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.op">Op</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Operand`<sup>Required</sup> <a name="Operand" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.operand"></a>

```go
func Operand() AlertConditionOperandOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperandOutputReference">AlertConditionOperandOutputReference</a>

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.threshold"></a>

```go
func Threshold() AlertConditionThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference">AlertConditionThresholdOutputReference</a>

---

##### `EmptyResultStateInput`<sup>Optional</sup> <a name="EmptyResultStateInput" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.emptyResultStateInput"></a>

```go
func EmptyResultStateInput() *string
```

- *Type:* *string

---

##### `OperandInput`<sup>Optional</sup> <a name="OperandInput" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.operandInput"></a>

```go
func OperandInput() AlertConditionOperand
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionOperand">AlertConditionOperand</a>

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.opInput"></a>

```go
func OpInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() AlertConditionThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a>

---

##### `EmptyResultState`<sup>Required</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.emptyResultState"></a>

```go
func EmptyResultState() *string
```

- *Type:* *string

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.op"></a>

```go
func Op() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alert.AlertConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertCondition
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertCondition">AlertCondition</a>

---


### AlertConditionThresholdOutputReference <a name="AlertConditionThresholdOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.NewAlertConditionThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertConditionThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.putValue">PutValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.putValue"></a>

```go
func PutValue(value AlertConditionThresholdValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference">AlertConditionThresholdValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.value"></a>

```go
func Value() AlertConditionThresholdValueOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference">AlertConditionThresholdValueOutputReference</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() AlertConditionThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertConditionThreshold
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThreshold">AlertConditionThreshold</a>

---


### AlertConditionThresholdValueOutputReference <a name="AlertConditionThresholdValueOutputReference" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/alert"

alert.NewAlertConditionThresholdValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AlertConditionThresholdValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetBoolValue">ResetBoolValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetDoubleValue">ResetDoubleValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetStringValue">ResetStringValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBoolValue` <a name="ResetBoolValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetBoolValue"></a>

```go
func ResetBoolValue()
```

##### `ResetDoubleValue` <a name="ResetDoubleValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetDoubleValue"></a>

```go
func ResetDoubleValue()
```

##### `ResetStringValue` <a name="ResetStringValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.resetStringValue"></a>

```go
func ResetStringValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.boolValueInput">BoolValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.doubleValueInput">DoubleValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.stringValueInput">StringValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.boolValue">BoolValue</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.doubleValue">DoubleValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.stringValue">StringValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BoolValueInput`<sup>Optional</sup> <a name="BoolValueInput" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.boolValueInput"></a>

```go
func BoolValueInput() interface{}
```

- *Type:* interface{}

---

##### `DoubleValueInput`<sup>Optional</sup> <a name="DoubleValueInput" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.doubleValueInput"></a>

```go
func DoubleValueInput() *f64
```

- *Type:* *f64

---

##### `StringValueInput`<sup>Optional</sup> <a name="StringValueInput" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.stringValueInput"></a>

```go
func StringValueInput() *string
```

- *Type:* *string

---

##### `BoolValue`<sup>Required</sup> <a name="BoolValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.boolValue"></a>

```go
func BoolValue() interface{}
```

- *Type:* interface{}

---

##### `DoubleValue`<sup>Required</sup> <a name="DoubleValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.doubleValue"></a>

```go
func DoubleValue() *f64
```

- *Type:* *f64

---

##### `StringValue`<sup>Required</sup> <a name="StringValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.stringValue"></a>

```go
func StringValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.alert.AlertConditionThresholdValueOutputReference.property.internalValue"></a>

```go
func InternalValue() AlertConditionThresholdValue
```

- *Type:* <a href="#@cdktf/provider-databricks.alert.AlertConditionThresholdValue">AlertConditionThresholdValue</a>

---



