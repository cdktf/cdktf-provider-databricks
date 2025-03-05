# `customAppIntegration` Submodule <a name="`customAppIntegration` Submodule" id="@cdktf/provider-databricks.customAppIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomAppIntegration <a name="CustomAppIntegration" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration databricks_custom_app_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/customappintegration"

customappintegration.NewCustomAppIntegration(scope Construct, id *string, config CustomAppIntegrationConfig) CustomAppIntegration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig">CustomAppIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig">CustomAppIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy">PutTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential">ResetConfidential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime">ResetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername">ResetCreatorUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId">ResetIntegrationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls">ResetRedirectUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy">ResetTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetUserAuthorizedScopes">ResetUserAuthorizedScopes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTokenAccessPolicy` <a name="PutTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy"></a>

```go
func PutTokenAccessPolicy(value CustomAppIntegrationTokenAccessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.putTokenAccessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetConfidential` <a name="ResetConfidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetConfidential"></a>

```go
func ResetConfidential()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetCreateTime` <a name="ResetCreateTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreateTime"></a>

```go
func ResetCreateTime()
```

##### `ResetCreatorUsername` <a name="ResetCreatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetCreatorUsername"></a>

```go
func ResetCreatorUsername()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetId"></a>

```go
func ResetId()
```

##### `ResetIntegrationId` <a name="ResetIntegrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetIntegrationId"></a>

```go
func ResetIntegrationId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetName"></a>

```go
func ResetName()
```

##### `ResetRedirectUrls` <a name="ResetRedirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetRedirectUrls"></a>

```go
func ResetRedirectUrls()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetScopes"></a>

```go
func ResetScopes()
```

##### `ResetTokenAccessPolicy` <a name="ResetTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetTokenAccessPolicy"></a>

```go
func ResetTokenAccessPolicy()
```

##### `ResetUserAuthorizedScopes` <a name="ResetUserAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.resetUserAuthorizedScopes"></a>

```go
func ResetUserAuthorizedScopes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/customappintegration"

customappintegration.CustomAppIntegration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/customappintegration"

customappintegration.CustomAppIntegration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/customappintegration"

customappintegration.CustomAppIntegration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/customappintegration"

customappintegration.CustomAppIntegration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CustomAppIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CustomAppIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CustomAppIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CustomAppIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy">TokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput">ConfidentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput">CreatedByInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput">CreateTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput">CreatorUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput">IntegrationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput">RedirectUrlsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput">ScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput">TokenAccessPolicyInput</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopesInput">UserAuthorizedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential">Confidential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy">CreatedBy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername">CreatorUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId">IntegrationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls">RedirectUrls</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopes">UserAuthorizedScopes</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TokenAccessPolicy`<sup>Required</sup> <a name="TokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicy"></a>

```go
func TokenAccessPolicy() CustomAppIntegrationTokenAccessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference">CustomAppIntegrationTokenAccessPolicyOutputReference</a>

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ConfidentialInput`<sup>Optional</sup> <a name="ConfidentialInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidentialInput"></a>

```go
func ConfidentialInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdByInput"></a>

```go
func CreatedByInput() *f64
```

- *Type:* *f64

---

##### `CreateTimeInput`<sup>Optional</sup> <a name="CreateTimeInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTimeInput"></a>

```go
func CreateTimeInput() *string
```

- *Type:* *string

---

##### `CreatorUsernameInput`<sup>Optional</sup> <a name="CreatorUsernameInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsernameInput"></a>

```go
func CreatorUsernameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IntegrationIdInput`<sup>Optional</sup> <a name="IntegrationIdInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationIdInput"></a>

```go
func IntegrationIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RedirectUrlsInput`<sup>Optional</sup> <a name="RedirectUrlsInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrlsInput"></a>

```go
func RedirectUrlsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopesInput"></a>

```go
func ScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TokenAccessPolicyInput`<sup>Optional</sup> <a name="TokenAccessPolicyInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tokenAccessPolicyInput"></a>

```go
func TokenAccessPolicyInput() CustomAppIntegrationTokenAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---

##### `UserAuthorizedScopesInput`<sup>Optional</sup> <a name="UserAuthorizedScopesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopesInput"></a>

```go
func UserAuthorizedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Confidential`<sup>Required</sup> <a name="Confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.confidential"></a>

```go
func Confidential() interface{}
```

- *Type:* interface{}

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createdBy"></a>

```go
func CreatedBy() *f64
```

- *Type:* *f64

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `CreatorUsername`<sup>Required</sup> <a name="CreatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.creatorUsername"></a>

```go
func CreatorUsername() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IntegrationId`<sup>Required</sup> <a name="IntegrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.integrationId"></a>

```go
func IntegrationId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RedirectUrls`<sup>Required</sup> <a name="RedirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.redirectUrls"></a>

```go
func RedirectUrls() *[]*string
```

- *Type:* *[]*string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `UserAuthorizedScopes`<sup>Required</sup> <a name="UserAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.userAuthorizedScopes"></a>

```go
func UserAuthorizedScopes() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CustomAppIntegrationConfig <a name="CustomAppIntegrationConfig" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/customappintegration"

&customappintegration.CustomAppIntegrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClientId: *string,
	ClientSecret: *string,
	Confidential: interface{},
	CreatedBy: *f64,
	CreateTime: *string,
	CreatorUsername: *string,
	Id: *string,
	IntegrationId: *string,
	Name: *string,
	RedirectUrls: *[]*string,
	Scopes: *[]*string,
	TokenAccessPolicy: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.customAppIntegration.CustomAppIntegrationTokenAccessPolicy,
	UserAuthorizedScopes: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential">Confidential</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy">CreatedBy</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime">CreateTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername">CreatorUsername</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId">IntegrationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls">RedirectUrls</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes">Scopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy">TokenAccessPolicy</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | token_access_policy block. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.userAuthorizedScopes">UserAuthorizedScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#client_id CustomAppIntegration#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#client_secret CustomAppIntegration#client_secret}.

---

##### `Confidential`<sup>Optional</sup> <a name="Confidential" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.confidential"></a>

```go
Confidential interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#confidential CustomAppIntegration#confidential}.

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createdBy"></a>

```go
CreatedBy *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#created_by CustomAppIntegration#created_by}.

---

##### `CreateTime`<sup>Optional</sup> <a name="CreateTime" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.createTime"></a>

```go
CreateTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#create_time CustomAppIntegration#create_time}.

---

##### `CreatorUsername`<sup>Optional</sup> <a name="CreatorUsername" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.creatorUsername"></a>

```go
CreatorUsername *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#creator_username CustomAppIntegration#creator_username}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#id CustomAppIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IntegrationId`<sup>Optional</sup> <a name="IntegrationId" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.integrationId"></a>

```go
IntegrationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#integration_id CustomAppIntegration#integration_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#name CustomAppIntegration#name}.

---

##### `RedirectUrls`<sup>Optional</sup> <a name="RedirectUrls" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.redirectUrls"></a>

```go
RedirectUrls *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#redirect_urls CustomAppIntegration#redirect_urls}.

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.scopes"></a>

```go
Scopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#scopes CustomAppIntegration#scopes}.

---

##### `TokenAccessPolicy`<sup>Optional</sup> <a name="TokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.tokenAccessPolicy"></a>

```go
TokenAccessPolicy CustomAppIntegrationTokenAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

token_access_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#token_access_policy CustomAppIntegration#token_access_policy}

---

##### `UserAuthorizedScopes`<sup>Optional</sup> <a name="UserAuthorizedScopes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationConfig.property.userAuthorizedScopes"></a>

```go
UserAuthorizedScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#user_authorized_scopes CustomAppIntegration#user_authorized_scopes}.

---

### CustomAppIntegrationTokenAccessPolicy <a name="CustomAppIntegrationTokenAccessPolicy" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/customappintegration"

&customappintegration.CustomAppIntegrationTokenAccessPolicy {
	AccessTokenTtlInMinutes: *f64,
	RefreshTokenTtlInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes">AccessTokenTtlInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes">RefreshTokenTtlInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}. |

---

##### `AccessTokenTtlInMinutes`<sup>Optional</sup> <a name="AccessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.accessTokenTtlInMinutes"></a>

```go
AccessTokenTtlInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#access_token_ttl_in_minutes CustomAppIntegration#access_token_ttl_in_minutes}.

---

##### `RefreshTokenTtlInMinutes`<sup>Optional</sup> <a name="RefreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy.property.refreshTokenTtlInMinutes"></a>

```go
RefreshTokenTtlInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.69.0/docs/resources/custom_app_integration#refresh_token_ttl_in_minutes CustomAppIntegration#refresh_token_ttl_in_minutes}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomAppIntegrationTokenAccessPolicyOutputReference <a name="CustomAppIntegrationTokenAccessPolicyOutputReference" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/customappintegration"

customappintegration.NewCustomAppIntegrationTokenAccessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CustomAppIntegrationTokenAccessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes">ResetAccessTokenTtlInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes">ResetRefreshTokenTtlInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessTokenTtlInMinutes` <a name="ResetAccessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetAccessTokenTtlInMinutes"></a>

```go
func ResetAccessTokenTtlInMinutes()
```

##### `ResetRefreshTokenTtlInMinutes` <a name="ResetRefreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.resetRefreshTokenTtlInMinutes"></a>

```go
func ResetRefreshTokenTtlInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput">AccessTokenTtlInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput">RefreshTokenTtlInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes">AccessTokenTtlInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes">RefreshTokenTtlInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenTtlInMinutesInput`<sup>Optional</sup> <a name="AccessTokenTtlInMinutesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutesInput"></a>

```go
func AccessTokenTtlInMinutesInput() *f64
```

- *Type:* *f64

---

##### `RefreshTokenTtlInMinutesInput`<sup>Optional</sup> <a name="RefreshTokenTtlInMinutesInput" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutesInput"></a>

```go
func RefreshTokenTtlInMinutesInput() *f64
```

- *Type:* *f64

---

##### `AccessTokenTtlInMinutes`<sup>Required</sup> <a name="AccessTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.accessTokenTtlInMinutes"></a>

```go
func AccessTokenTtlInMinutes() *f64
```

- *Type:* *f64

---

##### `RefreshTokenTtlInMinutes`<sup>Required</sup> <a name="RefreshTokenTtlInMinutes" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.refreshTokenTtlInMinutes"></a>

```go
func RefreshTokenTtlInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() CustomAppIntegrationTokenAccessPolicy
```

- *Type:* <a href="#@cdktf/provider-databricks.customAppIntegration.CustomAppIntegrationTokenAccessPolicy">CustomAppIntegrationTokenAccessPolicy</a>

---



