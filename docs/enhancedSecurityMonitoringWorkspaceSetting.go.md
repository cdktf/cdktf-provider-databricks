# `enhancedSecurityMonitoringWorkspaceSetting` Submodule <a name="`enhancedSecurityMonitoringWorkspaceSetting` Submodule" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnhancedSecurityMonitoringWorkspaceSetting <a name="EnhancedSecurityMonitoringWorkspaceSetting" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting databricks_enhanced_security_monitoring_workspace_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/enhancedsecuritymonitoringworkspacesetting"

enhancedsecuritymonitoringworkspacesetting.NewEnhancedSecurityMonitoringWorkspaceSetting(scope Construct, id *string, config EnhancedSecurityMonitoringWorkspaceSettingConfig) EnhancedSecurityMonitoringWorkspaceSetting
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig">EnhancedSecurityMonitoringWorkspaceSettingConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig">EnhancedSecurityMonitoringWorkspaceSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putEnhancedSecurityMonitoringWorkspace">PutEnhancedSecurityMonitoringWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetSettingName">ResetSettingName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEnhancedSecurityMonitoringWorkspace` <a name="PutEnhancedSecurityMonitoringWorkspace" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putEnhancedSecurityMonitoringWorkspace"></a>

```go
func PutEnhancedSecurityMonitoringWorkspace(value EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.putEnhancedSecurityMonitoringWorkspace.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a>

---

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetId"></a>

```go
func ResetId()
```

##### `ResetSettingName` <a name="ResetSettingName" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.resetSettingName"></a>

```go
func ResetSettingName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EnhancedSecurityMonitoringWorkspaceSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/enhancedsecuritymonitoringworkspacesetting"

enhancedsecuritymonitoringworkspacesetting.EnhancedSecurityMonitoringWorkspaceSetting_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/enhancedsecuritymonitoringworkspacesetting"

enhancedsecuritymonitoringworkspacesetting.EnhancedSecurityMonitoringWorkspaceSetting_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/enhancedsecuritymonitoringworkspacesetting"

enhancedsecuritymonitoringworkspacesetting.EnhancedSecurityMonitoringWorkspaceSetting_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/enhancedsecuritymonitoringworkspacesetting"

enhancedsecuritymonitoringworkspacesetting.EnhancedSecurityMonitoringWorkspaceSetting_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EnhancedSecurityMonitoringWorkspaceSetting resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EnhancedSecurityMonitoringWorkspaceSetting to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EnhancedSecurityMonitoringWorkspaceSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EnhancedSecurityMonitoringWorkspaceSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.enhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.enhancedSecurityMonitoringWorkspaceInput">EnhancedSecurityMonitoringWorkspaceInput</a></code> | <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.settingNameInput">SettingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.settingName">SettingName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnhancedSecurityMonitoringWorkspace`<sup>Required</sup> <a name="EnhancedSecurityMonitoringWorkspace" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.enhancedSecurityMonitoringWorkspace"></a>

```go
func EnhancedSecurityMonitoringWorkspace() EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference</a>

---

##### `EnhancedSecurityMonitoringWorkspaceInput`<sup>Optional</sup> <a name="EnhancedSecurityMonitoringWorkspaceInput" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.enhancedSecurityMonitoringWorkspaceInput"></a>

```go
func EnhancedSecurityMonitoringWorkspaceInput() EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a>

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `SettingNameInput`<sup>Optional</sup> <a name="SettingNameInput" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.settingNameInput"></a>

```go
func SettingNameInput() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SettingName`<sup>Required</sup> <a name="SettingName" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.settingName"></a>

```go
func SettingName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSetting.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EnhancedSecurityMonitoringWorkspaceSettingConfig <a name="EnhancedSecurityMonitoringWorkspaceSettingConfig" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/enhancedsecuritymonitoringworkspacesetting"

&enhancedsecuritymonitoringworkspacesetting.EnhancedSecurityMonitoringWorkspaceSettingConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnhancedSecurityMonitoringWorkspace: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace,
	Etag: *string,
	Id: *string,
	SettingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.enhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspace</a></code> | <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a></code> | enhanced_security_monitoring_workspace block. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.etag">Etag</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#etag EnhancedSecurityMonitoringWorkspaceSetting#etag}. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#id EnhancedSecurityMonitoringWorkspaceSetting#id}. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.settingName">SettingName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#setting_name EnhancedSecurityMonitoringWorkspaceSetting#setting_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnhancedSecurityMonitoringWorkspace`<sup>Required</sup> <a name="EnhancedSecurityMonitoringWorkspace" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.enhancedSecurityMonitoringWorkspace"></a>

```go
EnhancedSecurityMonitoringWorkspace EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a>

enhanced_security_monitoring_workspace block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#enhanced_security_monitoring_workspace EnhancedSecurityMonitoringWorkspaceSetting#enhanced_security_monitoring_workspace}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#etag EnhancedSecurityMonitoringWorkspaceSetting#etag}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#id EnhancedSecurityMonitoringWorkspaceSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SettingName`<sup>Optional</sup> <a name="SettingName" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingConfig.property.settingName"></a>

```go
SettingName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#setting_name EnhancedSecurityMonitoringWorkspaceSetting#setting_name}.

---

### EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace <a name="EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/enhancedsecuritymonitoringworkspacesetting"

&enhancedsecuritymonitoringworkspacesetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace {
	IsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#is_enabled EnhancedSecurityMonitoringWorkspaceSetting#is_enabled}. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.53.0/docs/resources/enhanced_security_monitoring_workspace_setting#is_enabled EnhancedSecurityMonitoringWorkspaceSetting#is_enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference <a name="EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/enhancedsecuritymonitoringworkspacesetting"

enhancedsecuritymonitoringworkspacesetting.NewEnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspaceOutputReference.property.internalValue"></a>

```go
func InternalValue() EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace
```

- *Type:* <a href="#@cdktf/provider-databricks.enhancedSecurityMonitoringWorkspaceSetting.EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace">EnhancedSecurityMonitoringWorkspaceSettingEnhancedSecurityMonitoringWorkspace</a>

---



