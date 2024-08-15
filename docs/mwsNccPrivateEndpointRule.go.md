# `mwsNccPrivateEndpointRule` Submodule <a name="`mwsNccPrivateEndpointRule` Submodule" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MwsNccPrivateEndpointRule <a name="MwsNccPrivateEndpointRule" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule databricks_mws_ncc_private_endpoint_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.NewMwsNccPrivateEndpointRule(scope Construct, id *string, config MwsNccPrivateEndpointRuleConfig) MwsNccPrivateEndpointRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig">MwsNccPrivateEndpointRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetConnectionState">ResetConnectionState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetCreationTime">ResetCreationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivated">ResetDeactivated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivatedAt">ResetDeactivatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointName">ResetEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetUpdatedTime">ResetUpdatedTime</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetConnectionState` <a name="ResetConnectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetConnectionState"></a>

```go
func ResetConnectionState()
```

##### `ResetCreationTime` <a name="ResetCreationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetCreationTime"></a>

```go
func ResetCreationTime()
```

##### `ResetDeactivated` <a name="ResetDeactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivated"></a>

```go
func ResetDeactivated()
```

##### `ResetDeactivatedAt` <a name="ResetDeactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetDeactivatedAt"></a>

```go
func ResetDeactivatedAt()
```

##### `ResetEndpointName` <a name="ResetEndpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetEndpointName"></a>

```go
func ResetEndpointName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetId"></a>

```go
func ResetId()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetUpdatedTime` <a name="ResetUpdatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.resetUpdatedTime"></a>

```go
func ResetUpdatedTime()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a MwsNccPrivateEndpointRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.MwsNccPrivateEndpointRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.MwsNccPrivateEndpointRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.MwsNccPrivateEndpointRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnccprivateendpointrule"

mwsnccprivateendpointrule.MwsNccPrivateEndpointRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a MwsNccPrivateEndpointRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MwsNccPrivateEndpointRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MwsNccPrivateEndpointRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the MwsNccPrivateEndpointRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionStateInput">ConnectionStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTimeInput">CreationTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAtInput">DeactivatedAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedInput">DeactivatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointNameInput">EndpointNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput">GroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput">NetworkConnectivityConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTimeInput">UpdatedTimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState">ConnectionState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime">CreationTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt">DeactivatedAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName">EndpointName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionStateInput`<sup>Optional</sup> <a name="ConnectionStateInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionStateInput"></a>

```go
func ConnectionStateInput() *string
```

- *Type:* *string

---

##### `CreationTimeInput`<sup>Optional</sup> <a name="CreationTimeInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTimeInput"></a>

```go
func CreationTimeInput() *f64
```

- *Type:* *f64

---

##### `DeactivatedAtInput`<sup>Optional</sup> <a name="DeactivatedAtInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAtInput"></a>

```go
func DeactivatedAtInput() *f64
```

- *Type:* *f64

---

##### `DeactivatedInput`<sup>Optional</sup> <a name="DeactivatedInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedInput"></a>

```go
func DeactivatedInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointNameInput`<sup>Optional</sup> <a name="EndpointNameInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointNameInput"></a>

```go
func EndpointNameInput() *string
```

- *Type:* *string

---

##### `GroupIdInput`<sup>Optional</sup> <a name="GroupIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupIdInput"></a>

```go
func GroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigIdInput`<sup>Optional</sup> <a name="NetworkConnectivityConfigIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigIdInput"></a>

```go
func NetworkConnectivityConfigIdInput() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `UpdatedTimeInput`<sup>Optional</sup> <a name="UpdatedTimeInput" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTimeInput"></a>

```go
func UpdatedTimeInput() *f64
```

- *Type:* *f64

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.connectionState"></a>

```go
func ConnectionState() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.creationTime"></a>

```go
func CreationTime() *f64
```

- *Type:* *f64

---

##### `Deactivated`<sup>Required</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivated"></a>

```go
func Deactivated() interface{}
```

- *Type:* interface{}

---

##### `DeactivatedAt`<sup>Required</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.deactivatedAt"></a>

```go
func DeactivatedAt() *f64
```

- *Type:* *f64

---

##### `EndpointName`<sup>Required</sup> <a name="EndpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.endpointName"></a>

```go
func EndpointName() *string
```

- *Type:* *string

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.networkConnectivityConfigId"></a>

```go
func NetworkConnectivityConfigId() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `UpdatedTime`<sup>Required</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.updatedTime"></a>

```go
func UpdatedTime() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MwsNccPrivateEndpointRuleConfig <a name="MwsNccPrivateEndpointRuleConfig" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/mwsnccprivateendpointrule"

&mwsnccprivateendpointrule.MwsNccPrivateEndpointRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GroupId: *string,
	NetworkConnectivityConfigId: *string,
	ResourceId: *string,
	ConnectionState: *string,
	CreationTime: *f64,
	Deactivated: interface{},
	DeactivatedAt: *f64,
	EndpointName: *string,
	Id: *string,
	RuleId: *string,
	UpdatedTime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId">GroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId">NetworkConnectivityConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connectionState">ConnectionState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.creationTime">CreationTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivated">Deactivated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivatedAt">DeactivatedAt</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointName">EndpointName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.ruleId">RuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}. |
| <code><a href="#@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.updatedTime">UpdatedTime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.groupId"></a>

```go
GroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#group_id MwsNccPrivateEndpointRule#group_id}.

---

##### `NetworkConnectivityConfigId`<sup>Required</sup> <a name="NetworkConnectivityConfigId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.networkConnectivityConfigId"></a>

```go
NetworkConnectivityConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#network_connectivity_config_id MwsNccPrivateEndpointRule#network_connectivity_config_id}.

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#resource_id MwsNccPrivateEndpointRule#resource_id}.

---

##### `ConnectionState`<sup>Optional</sup> <a name="ConnectionState" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.connectionState"></a>

```go
ConnectionState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#connection_state MwsNccPrivateEndpointRule#connection_state}.

---

##### `CreationTime`<sup>Optional</sup> <a name="CreationTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.creationTime"></a>

```go
CreationTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#creation_time MwsNccPrivateEndpointRule#creation_time}.

---

##### `Deactivated`<sup>Optional</sup> <a name="Deactivated" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivated"></a>

```go
Deactivated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated MwsNccPrivateEndpointRule#deactivated}.

---

##### `DeactivatedAt`<sup>Optional</sup> <a name="DeactivatedAt" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.deactivatedAt"></a>

```go
DeactivatedAt *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#deactivated_at MwsNccPrivateEndpointRule#deactivated_at}.

---

##### `EndpointName`<sup>Optional</sup> <a name="EndpointName" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.endpointName"></a>

```go
EndpointName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#endpoint_name MwsNccPrivateEndpointRule#endpoint_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#id MwsNccPrivateEndpointRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#rule_id MwsNccPrivateEndpointRule#rule_id}.

---

##### `UpdatedTime`<sup>Optional</sup> <a name="UpdatedTime" id="@cdktf/provider-databricks.mwsNccPrivateEndpointRule.MwsNccPrivateEndpointRuleConfig.property.updatedTime"></a>

```go
UpdatedTime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.50.0/docs/resources/mws_ncc_private_endpoint_rule#updated_time MwsNccPrivateEndpointRule#updated_time}.

---



