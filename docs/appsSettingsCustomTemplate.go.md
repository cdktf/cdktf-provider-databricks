# `appsSettingsCustomTemplate` Submodule <a name="`appsSettingsCustomTemplate` Submodule" id="@cdktf/provider-databricks.appsSettingsCustomTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsSettingsCustomTemplate <a name="AppsSettingsCustomTemplate" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template databricks_apps_settings_custom_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplate(scope Construct, id *string, config AppsSettingsCustomTemplateConfig) AppsSettingsCustomTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig">AppsSettingsCustomTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig">AppsSettingsCustomTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest">PutManifest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutManifest` <a name="PutManifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest"></a>

```go
func PutManifest(value AppsSettingsCustomTemplateManifest)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.putManifest.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.resetDescription"></a>

```go
func ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.AppsSettingsCustomTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.AppsSettingsCustomTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.AppsSettingsCustomTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.AppsSettingsCustomTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AppsSettingsCustomTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AppsSettingsCustomTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AppsSettingsCustomTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AppsSettingsCustomTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.creator">Creator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference">AppsSettingsCustomTemplateManifestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProviderInput">GitProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepoInput">GitRepoInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifestInput">ManifestInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProvider">GitProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepo">GitRepo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.path">Path</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Creator`<sup>Required</sup> <a name="Creator" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.creator"></a>

```go
func Creator() *string
```

- *Type:* *string

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifest"></a>

```go
func Manifest() AppsSettingsCustomTemplateManifestOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference">AppsSettingsCustomTemplateManifestOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GitProviderInput`<sup>Optional</sup> <a name="GitProviderInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProviderInput"></a>

```go
func GitProviderInput() *string
```

- *Type:* *string

---

##### `GitRepoInput`<sup>Optional</sup> <a name="GitRepoInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepoInput"></a>

```go
func GitRepoInput() *string
```

- *Type:* *string

---

##### `ManifestInput`<sup>Optional</sup> <a name="ManifestInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.manifestInput"></a>

```go
func ManifestInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitProvider"></a>

```go
func GitProvider() *string
```

- *Type:* *string

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.gitRepo"></a>

```go
func GitRepo() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsSettingsCustomTemplateConfig <a name="AppsSettingsCustomTemplateConfig" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

&appssettingscustomtemplate.AppsSettingsCustomTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	GitProvider: *string,
	GitRepo: *string,
	Manifest: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest,
	Name: *string,
	Path: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitProvider">GitProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitRepo">GitRepo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.manifest">Manifest</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GitProvider`<sup>Required</sup> <a name="GitProvider" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitProvider"></a>

```go
GitProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#git_provider AppsSettingsCustomTemplate#git_provider}.

---

##### `GitRepo`<sup>Required</sup> <a name="GitRepo" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.gitRepo"></a>

```go
GitRepo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#git_repo AppsSettingsCustomTemplate#git_repo}.

---

##### `Manifest`<sup>Required</sup> <a name="Manifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.manifest"></a>

```go
Manifest AppsSettingsCustomTemplateManifest
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest">AppsSettingsCustomTemplateManifest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#manifest AppsSettingsCustomTemplate#manifest}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#path AppsSettingsCustomTemplate#path}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

### AppsSettingsCustomTemplateManifest <a name="AppsSettingsCustomTemplateManifest" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

&appssettingscustomtemplate.AppsSettingsCustomTemplateManifest {
	Name: *string,
	Version: *f64,
	Description: *string,
	ResourceSpecs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.version">Version</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.resourceSpecs">ResourceSpecs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.version"></a>

```go
Version *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#version AppsSettingsCustomTemplate#version}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `ResourceSpecs`<sup>Optional</sup> <a name="ResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifest.property.resourceSpecs"></a>

```go
ResourceSpecs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#resource_specs AppsSettingsCustomTemplate#resource_specs}.

---

### AppsSettingsCustomTemplateManifestResourceSpecs <a name="AppsSettingsCustomTemplateManifestResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

&appssettingscustomtemplate.AppsSettingsCustomTemplateManifestResourceSpecs {
	Name: *string,
	Description: *string,
	JobSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec,
	SecretSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec,
	ServingEndpointSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec,
	SqlWarehouseSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec,
	UcSecurableSpec: github.com/cdktf/cdktf-provider-databricks-go/databricks/v15.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#name AppsSettingsCustomTemplate#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#description AppsSettingsCustomTemplate#description}.

---

##### `JobSpec`<sup>Optional</sup> <a name="JobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.jobSpec"></a>

```go
JobSpec AppsSettingsCustomTemplateManifestResourceSpecsJobSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#job_spec AppsSettingsCustomTemplate#job_spec}.

---

##### `SecretSpec`<sup>Optional</sup> <a name="SecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.secretSpec"></a>

```go
SecretSpec AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#secret_spec AppsSettingsCustomTemplate#secret_spec}.

---

##### `ServingEndpointSpec`<sup>Optional</sup> <a name="ServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.servingEndpointSpec"></a>

```go
ServingEndpointSpec AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#serving_endpoint_spec AppsSettingsCustomTemplate#serving_endpoint_spec}.

---

##### `SqlWarehouseSpec`<sup>Optional</sup> <a name="SqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.sqlWarehouseSpec"></a>

```go
SqlWarehouseSpec AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#sql_warehouse_spec AppsSettingsCustomTemplate#sql_warehouse_spec}.

---

##### `UcSecurableSpec`<sup>Optional</sup> <a name="UcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecs.property.ucSecurableSpec"></a>

```go
UcSecurableSpec AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#uc_securable_spec AppsSettingsCustomTemplate#uc_securable_spec}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsJobSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

&appssettingscustomtemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

&appssettingscustomtemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

&appssettingscustomtemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

&appssettingscustomtemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec {
	Permission: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

### AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec <a name="AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

&appssettingscustomtemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec {
	Permission: *string,
	SecurableType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission">Permission</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType">SecurableType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}. |

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.permission"></a>

```go
Permission *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#permission AppsSettingsCustomTemplate#permission}.

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec.property.securableType"></a>

```go
SecurableType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.92.0/docs/resources/apps_settings_custom_template#securable_type AppsSettingsCustomTemplate#securable_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsSettingsCustomTemplateManifestOutputReference <a name="AppsSettingsCustomTemplateManifestOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplateManifestOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsSettingsCustomTemplateManifestOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs">PutResourceSpecs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs">ResetResourceSpecs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceSpecs` <a name="PutResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs"></a>

```go
func PutResourceSpecs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.putResourceSpecs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetResourceSpecs` <a name="ResetResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.resetResourceSpecs"></a>

```go
func ResetResourceSpecs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs">ResourceSpecs</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList">AppsSettingsCustomTemplateManifestResourceSpecsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput">ResourceSpecsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.versionInput">VersionInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceSpecs`<sup>Required</sup> <a name="ResourceSpecs" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecs"></a>

```go
func ResourceSpecs() AppsSettingsCustomTemplateManifestResourceSpecsList
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList">AppsSettingsCustomTemplateManifestResourceSpecsList</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ResourceSpecsInput`<sup>Optional</sup> <a name="ResourceSpecsInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.resourceSpecsInput"></a>

```go
func ResourceSpecsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.versionInput"></a>

```go
func VersionInput() *f64
```

- *Type:* *f64

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsSettingsCustomTemplateManifestResourceSpecsList <a name="AppsSettingsCustomTemplateManifestResourceSpecsList" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplateManifestResourceSpecsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) AppsSettingsCustomTemplateManifestResourceSpecsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get"></a>

```go
func Get(index *f64) AppsSettingsCustomTemplateManifestResourceSpecsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsSettingsCustomTemplateManifestResourceSpecsOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplateManifestResourceSpecsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) AppsSettingsCustomTemplateManifestResourceSpecsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec">PutJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec">PutSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec">PutServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec">PutSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec">PutUcSecurableSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec">ResetJobSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec">ResetSecretSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec">ResetServingEndpointSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec">ResetSqlWarehouseSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec">ResetUcSecurableSpec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobSpec` <a name="PutJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec"></a>

```go
func PutJobSpec(value AppsSettingsCustomTemplateManifestResourceSpecsJobSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putJobSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpec">AppsSettingsCustomTemplateManifestResourceSpecsJobSpec</a>

---

##### `PutSecretSpec` <a name="PutSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec"></a>

```go
func PutSecretSpec(value AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSecretSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpec</a>

---

##### `PutServingEndpointSpec` <a name="PutServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec"></a>

```go
func PutServingEndpointSpec(value AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putServingEndpointSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpec</a>

---

##### `PutSqlWarehouseSpec` <a name="PutSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec"></a>

```go
func PutSqlWarehouseSpec(value AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putSqlWarehouseSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpec</a>

---

##### `PutUcSecurableSpec` <a name="PutUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec"></a>

```go
func PutUcSecurableSpec(value AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.putUcSecurableSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpec</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetJobSpec` <a name="ResetJobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetJobSpec"></a>

```go
func ResetJobSpec()
```

##### `ResetSecretSpec` <a name="ResetSecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSecretSpec"></a>

```go
func ResetSecretSpec()
```

##### `ResetServingEndpointSpec` <a name="ResetServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetServingEndpointSpec"></a>

```go
func ResetServingEndpointSpec()
```

##### `ResetSqlWarehouseSpec` <a name="ResetSqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetSqlWarehouseSpec"></a>

```go
func ResetSqlWarehouseSpec()
```

##### `ResetUcSecurableSpec` <a name="ResetUcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.resetUcSecurableSpec"></a>

```go
func ResetUcSecurableSpec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec">JobSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec">SecretSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec">ServingEndpointSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec">SqlWarehouseSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec">UcSecurableSpec</a></code> | <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput">JobSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput">SecretSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput">ServingEndpointSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput">SqlWarehouseSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput">UcSecurableSpecInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobSpec`<sup>Required</sup> <a name="JobSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpec"></a>

```go
func JobSpec() AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsJobSpecOutputReference</a>

---

##### `SecretSpec`<sup>Required</sup> <a name="SecretSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpec"></a>

```go
func SecretSpec() AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference</a>

---

##### `ServingEndpointSpec`<sup>Required</sup> <a name="ServingEndpointSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpec"></a>

```go
func ServingEndpointSpec() AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference</a>

---

##### `SqlWarehouseSpec`<sup>Required</sup> <a name="SqlWarehouseSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpec"></a>

```go
func SqlWarehouseSpec() AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference</a>

---

##### `UcSecurableSpec`<sup>Required</sup> <a name="UcSecurableSpec" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpec"></a>

```go
func UcSecurableSpec() AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference">AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `JobSpecInput`<sup>Optional</sup> <a name="JobSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.jobSpecInput"></a>

```go
func JobSpecInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecretSpecInput`<sup>Optional</sup> <a name="SecretSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.secretSpecInput"></a>

```go
func SecretSpecInput() interface{}
```

- *Type:* interface{}

---

##### `ServingEndpointSpecInput`<sup>Optional</sup> <a name="ServingEndpointSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.servingEndpointSpecInput"></a>

```go
func ServingEndpointSpecInput() interface{}
```

- *Type:* interface{}

---

##### `SqlWarehouseSpecInput`<sup>Optional</sup> <a name="SqlWarehouseSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.sqlWarehouseSpecInput"></a>

```go
func SqlWarehouseSpecInput() interface{}
```

- *Type:* interface{}

---

##### `UcSecurableSpecInput`<sup>Optional</sup> <a name="UcSecurableSpecInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.ucSecurableSpecInput"></a>

```go
func UcSecurableSpecInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSecretSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsServingEndpointSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsSqlWarehouseSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference <a name="AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v15/appssettingscustomtemplate"

appssettingscustomtemplate.NewAppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput">PermissionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput">SecurableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission">Permission</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType">SecurableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PermissionInput`<sup>Optional</sup> <a name="PermissionInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permissionInput"></a>

```go
func PermissionInput() *string
```

- *Type:* *string

---

##### `SecurableTypeInput`<sup>Optional</sup> <a name="SecurableTypeInput" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableTypeInput"></a>

```go
func SecurableTypeInput() *string
```

- *Type:* *string

---

##### `Permission`<sup>Required</sup> <a name="Permission" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.permission"></a>

```go
func Permission() *string
```

- *Type:* *string

---

##### `SecurableType`<sup>Required</sup> <a name="SecurableType" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.securableType"></a>

```go
func SecurableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.appsSettingsCustomTemplate.AppsSettingsCustomTemplateManifestResourceSpecsUcSecurableSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



