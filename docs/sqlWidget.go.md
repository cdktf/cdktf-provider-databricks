# `sqlWidget` Submodule <a name="`sqlWidget` Submodule" id="@cdktf/provider-databricks.sqlWidget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlWidget <a name="SqlWidget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget databricks_sql_widget}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

sqlwidget.NewSqlWidget(scope Construct, id *string, config SqlWidgetConfig) SqlWidget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig">SqlWidgetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig">SqlWidgetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter">PutParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition">PutPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetParameter">ResetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId">ResetVisualizationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.resetWidgetId">ResetWidgetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutParameter` <a name="PutParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter"></a>

```go
func PutParameter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putParameter.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPosition` <a name="PutPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition"></a>

```go
func PutPosition(value SqlWidgetPosition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.putPosition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetId"></a>

```go
func ResetId()
```

##### `ResetParameter` <a name="ResetParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetParameter"></a>

```go
func ResetParameter()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetPosition"></a>

```go
func ResetPosition()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetText"></a>

```go
func ResetText()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetVisualizationId` <a name="ResetVisualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetVisualizationId"></a>

```go
func ResetVisualizationId()
```

##### `ResetWidgetId` <a name="ResetWidgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.resetWidgetId"></a>

```go
func ResetWidgetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlWidget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

sqlwidget.SqlWidget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

sqlwidget.SqlWidget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

sqlwidget.SqlWidget_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

sqlwidget.SqlWidget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SqlWidget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqlWidget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqlWidget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SqlWidget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameter">Parameter</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.position">Position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput">DashboardIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameterInput">ParameterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.positionInput">PositionInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput">VisualizationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput">WidgetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardId">DashboardId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationId">VisualizationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetId">WidgetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameter"></a>

```go
func Parameter() SqlWidgetParameterList
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList">SqlWidgetParameterList</a>

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.position"></a>

```go
func Position() SqlWidgetPositionOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference">SqlWidgetPositionOutputReference</a>

---

##### `DashboardIdInput`<sup>Optional</sup> <a name="DashboardIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardIdInput"></a>

```go
func DashboardIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.parameterInput"></a>

```go
func ParameterInput() interface{}
```

- *Type:* interface{}

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.positionInput"></a>

```go
func PositionInput() SqlWidgetPosition
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `VisualizationIdInput`<sup>Optional</sup> <a name="VisualizationIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationIdInput"></a>

```go
func VisualizationIdInput() *string
```

- *Type:* *string

---

##### `WidgetIdInput`<sup>Optional</sup> <a name="WidgetIdInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetIdInput"></a>

```go
func WidgetIdInput() *string
```

- *Type:* *string

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.dashboardId"></a>

```go
func DashboardId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `VisualizationId`<sup>Required</sup> <a name="VisualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.visualizationId"></a>

```go
func VisualizationId() *string
```

- *Type:* *string

---

##### `WidgetId`<sup>Required</sup> <a name="WidgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.widgetId"></a>

```go
func WidgetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlWidget.SqlWidget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlWidgetConfig <a name="SqlWidgetConfig" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

&sqlwidget.SqlWidgetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DashboardId: *string,
	Description: *string,
	Id: *string,
	Parameter: interface{},
	Position: github.com/cdktf/cdktf-provider-databricks-go/databricks/v12.sqlWidget.SqlWidgetPosition,
	Text: *string,
	Title: *string,
	VisualizationId: *string,
	WidgetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId">DashboardId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#description SqlWidget#description}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#id SqlWidget#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter">Parameter</a></code> | <code>interface{}</code> | parameter block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.position">Position</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | position block. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#text SqlWidget#text}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId">VisualizationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId">WidgetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DashboardId`<sup>Required</sup> <a name="DashboardId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.dashboardId"></a>

```go
DashboardId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#dashboard_id SqlWidget#dashboard_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#description SqlWidget#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#id SqlWidget#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parameter`<sup>Optional</sup> <a name="Parameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.parameter"></a>

```go
Parameter interface{}
```

- *Type:* interface{}

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#parameter SqlWidget#parameter}

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.position"></a>

```go
Position SqlWidgetPosition
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

position block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#position SqlWidget#position}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#text SqlWidget#text}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `VisualizationId`<sup>Optional</sup> <a name="VisualizationId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.visualizationId"></a>

```go
VisualizationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#visualization_id SqlWidget#visualization_id}.

---

##### `WidgetId`<sup>Optional</sup> <a name="WidgetId" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetConfig.property.widgetId"></a>

```go
WidgetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#widget_id SqlWidget#widget_id}.

---

### SqlWidgetParameter <a name="SqlWidgetParameter" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

&sqlwidget.SqlWidgetParameter {
	Name: *string,
	Type: *string,
	MapTo: *string,
	Title: *string,
	Value: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#name SqlWidget#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#type SqlWidget#type}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo">MapTo</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#map_to SqlWidget#map_to}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#title SqlWidget#title}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#value SqlWidget#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#values SqlWidget#values}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#name SqlWidget#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#type SqlWidget#type}.

---

##### `MapTo`<sup>Optional</sup> <a name="MapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.mapTo"></a>

```go
MapTo *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#map_to SqlWidget#map_to}.

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#title SqlWidget#title}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#value SqlWidget#value}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#values SqlWidget#values}.

---

### SqlWidgetPosition <a name="SqlWidgetPosition" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

&sqlwidget.SqlWidgetPosition {
	SizeX: *f64,
	SizeY: *f64,
	AutoHeight: interface{},
	PosX: *f64,
	PosY: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX">SizeX</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#size_x SqlWidget#size_x}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY">SizeY</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#size_y SqlWidget#size_y}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight">AutoHeight</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#auto_height SqlWidget#auto_height}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX">PosX</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#pos_x SqlWidget#pos_x}. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY">PosY</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#pos_y SqlWidget#pos_y}. |

---

##### `SizeX`<sup>Required</sup> <a name="SizeX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeX"></a>

```go
SizeX *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#size_x SqlWidget#size_x}.

---

##### `SizeY`<sup>Required</sup> <a name="SizeY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.sizeY"></a>

```go
SizeY *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#size_y SqlWidget#size_y}.

---

##### `AutoHeight`<sup>Optional</sup> <a name="AutoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.autoHeight"></a>

```go
AutoHeight interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#auto_height SqlWidget#auto_height}.

---

##### `PosX`<sup>Optional</sup> <a name="PosX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posX"></a>

```go
PosX *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#pos_x SqlWidget#pos_x}.

---

##### `PosY`<sup>Optional</sup> <a name="PosY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition.property.posY"></a>

```go
PosY *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.33.0/docs/resources/sql_widget#pos_y SqlWidget#pos_y}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlWidgetParameterList <a name="SqlWidgetParameterList" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

sqlwidget.NewSqlWidgetParameterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SqlWidgetParameterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get"></a>

```go
func Get(index *f64) SqlWidgetParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlWidgetParameterOutputReference <a name="SqlWidgetParameterOutputReference" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

sqlwidget.NewSqlWidgetParameterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SqlWidgetParameterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo">ResetMapTo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMapTo` <a name="ResetMapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetMapTo"></a>

```go
func ResetMapTo()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetTitle"></a>

```go
func ResetTitle()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValue"></a>

```go
func ResetValue()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput">MapToInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo">MapTo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MapToInput`<sup>Optional</sup> <a name="MapToInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapToInput"></a>

```go
func MapToInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `MapTo`<sup>Required</sup> <a name="MapTo" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.mapTo"></a>

```go
func MapTo() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetParameterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SqlWidgetPositionOutputReference <a name="SqlWidgetPositionOutputReference" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v12/sqlwidget"

sqlwidget.NewSqlWidgetPositionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlWidgetPositionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight">ResetAutoHeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX">ResetPosX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY">ResetPosY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoHeight` <a name="ResetAutoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetAutoHeight"></a>

```go
func ResetAutoHeight()
```

##### `ResetPosX` <a name="ResetPosX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosX"></a>

```go
func ResetPosX()
```

##### `ResetPosY` <a name="ResetPosY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.resetPosY"></a>

```go
func ResetPosY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput">AutoHeightInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput">PosXInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput">PosYInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput">SizeXInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput">SizeYInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight">AutoHeight</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX">PosX</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY">PosY</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX">SizeX</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY">SizeY</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoHeightInput`<sup>Optional</sup> <a name="AutoHeightInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeightInput"></a>

```go
func AutoHeightInput() interface{}
```

- *Type:* interface{}

---

##### `PosXInput`<sup>Optional</sup> <a name="PosXInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posXInput"></a>

```go
func PosXInput() *f64
```

- *Type:* *f64

---

##### `PosYInput`<sup>Optional</sup> <a name="PosYInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posYInput"></a>

```go
func PosYInput() *f64
```

- *Type:* *f64

---

##### `SizeXInput`<sup>Optional</sup> <a name="SizeXInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeXInput"></a>

```go
func SizeXInput() *f64
```

- *Type:* *f64

---

##### `SizeYInput`<sup>Optional</sup> <a name="SizeYInput" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeYInput"></a>

```go
func SizeYInput() *f64
```

- *Type:* *f64

---

##### `AutoHeight`<sup>Required</sup> <a name="AutoHeight" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.autoHeight"></a>

```go
func AutoHeight() interface{}
```

- *Type:* interface{}

---

##### `PosX`<sup>Required</sup> <a name="PosX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posX"></a>

```go
func PosX() *f64
```

- *Type:* *f64

---

##### `PosY`<sup>Required</sup> <a name="PosY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.posY"></a>

```go
func PosY() *f64
```

- *Type:* *f64

---

##### `SizeX`<sup>Required</sup> <a name="SizeX" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeX"></a>

```go
func SizeX() *f64
```

- *Type:* *f64

---

##### `SizeY`<sup>Required</sup> <a name="SizeY" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.sizeY"></a>

```go
func SizeY() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlWidget.SqlWidgetPositionOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlWidgetPosition
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlWidget.SqlWidgetPosition">SqlWidgetPosition</a>

---



