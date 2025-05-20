# `sqlAlert` Submodule <a name="`sqlAlert` Submodule" id="@cdktf/provider-databricks.sqlAlert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SqlAlert <a name="SqlAlert" id="@cdktf/provider-databricks.sqlAlert.SqlAlert"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert databricks_sql_alert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/sqlalert"

sqlalert.NewSqlAlert(scope Construct, id *string, config SqlAlertConfig) SqlAlert
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig">SqlAlertConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig">SqlAlertConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions">PutOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetCreatedAt">ResetCreatedAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetRearm">ResetRearm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.resetUpdatedAt">ResetUpdatedAt</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutOptions` <a name="PutOptions" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions"></a>

```go
func PutOptions(value SqlAlertOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---

##### `ResetCreatedAt` <a name="ResetCreatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetCreatedAt"></a>

```go
func ResetCreatedAt()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetId"></a>

```go
func ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetParent"></a>

```go
func ResetParent()
```

##### `ResetRearm` <a name="ResetRearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetRearm"></a>

```go
func ResetRearm()
```

##### `ResetUpdatedAt` <a name="ResetUpdatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.resetUpdatedAt"></a>

```go
func ResetUpdatedAt()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SqlAlert resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/sqlalert"

sqlalert.SqlAlert_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/sqlalert"

sqlalert.SqlAlert_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/sqlalert"

sqlalert.SqlAlert_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/sqlalert"

sqlalert.SqlAlert_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SqlAlert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SqlAlert to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SqlAlert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SqlAlert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.options">Options</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference">SqlAlertOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAtInput">CreatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.optionsInput">OptionsInput</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryIdInput">QueryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearmInput">RearmInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAtInput">UpdatedAtInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryId">QueryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearm">Rearm</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.options"></a>

```go
func Options() SqlAlertOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference">SqlAlertOptionsOutputReference</a>

---

##### `CreatedAtInput`<sup>Optional</sup> <a name="CreatedAtInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAtInput"></a>

```go
func CreatedAtInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptionsInput`<sup>Optional</sup> <a name="OptionsInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.optionsInput"></a>

```go
func OptionsInput() SqlAlertOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `QueryIdInput`<sup>Optional</sup> <a name="QueryIdInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryIdInput"></a>

```go
func QueryIdInput() *string
```

- *Type:* *string

---

##### `RearmInput`<sup>Optional</sup> <a name="RearmInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearmInput"></a>

```go
func RearmInput() *f64
```

- *Type:* *f64

---

##### `UpdatedAtInput`<sup>Optional</sup> <a name="UpdatedAtInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAtInput"></a>

```go
func UpdatedAtInput() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.queryId"></a>

```go
func QueryId() *string
```

- *Type:* *string

---

##### `Rearm`<sup>Required</sup> <a name="Rearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.rearm"></a>

```go
func Rearm() *f64
```

- *Type:* *f64

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlert.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.sqlAlert.SqlAlert.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SqlAlertConfig <a name="SqlAlertConfig" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/sqlalert"

&sqlalert.SqlAlertConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Options: github.com/cdktf/cdktf-provider-databricks-go/databricks/v13.sqlAlert.SqlAlertOptions,
	QueryId: *string,
	CreatedAt: *string,
	Id: *string,
	Parent: *string,
	Rearm: *f64,
	UpdatedAt: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#name SqlAlert#name}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.options">Options</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | options block. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.queryId">QueryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#query_id SqlAlert#query_id}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.createdAt">CreatedAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#created_at SqlAlert#created_at}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#id SqlAlert#id}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.parent">Parent</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#parent SqlAlert#parent}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.rearm">Rearm</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#rearm SqlAlert#rearm}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#name SqlAlert#name}.

---

##### `Options`<sup>Required</sup> <a name="Options" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.options"></a>

```go
Options SqlAlertOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#options SqlAlert#options}

---

##### `QueryId`<sup>Required</sup> <a name="QueryId" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.queryId"></a>

```go
QueryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#query_id SqlAlert#query_id}.

---

##### `CreatedAt`<sup>Optional</sup> <a name="CreatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.createdAt"></a>

```go
CreatedAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#created_at SqlAlert#created_at}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#id SqlAlert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#parent SqlAlert#parent}.

---

##### `Rearm`<sup>Optional</sup> <a name="Rearm" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.rearm"></a>

```go
Rearm *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#rearm SqlAlert#rearm}.

---

##### `UpdatedAt`<sup>Optional</sup> <a name="UpdatedAt" id="@cdktf/provider-databricks.sqlAlert.SqlAlertConfig.property.updatedAt"></a>

```go
UpdatedAt *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#updated_at SqlAlert#updated_at}.

---

### SqlAlertOptions <a name="SqlAlertOptions" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/sqlalert"

&sqlalert.SqlAlertOptions {
	Column: *string,
	Op: *string,
	Value: *string,
	CustomBody: *string,
	CustomSubject: *string,
	EmptyResultState: *string,
	Muted: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.column">Column</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#column SqlAlert#column}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.op">Op</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#op SqlAlert#op}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#value SqlAlert#value}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customBody">CustomBody</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customSubject">CustomSubject</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#empty_result_state SqlAlert#empty_result_state}. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.muted">Muted</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#muted SqlAlert#muted}. |

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.column"></a>

```go
Column *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#column SqlAlert#column}.

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.op"></a>

```go
Op *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#op SqlAlert#op}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#value SqlAlert#value}.

---

##### `CustomBody`<sup>Optional</sup> <a name="CustomBody" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customBody"></a>

```go
CustomBody *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#custom_body SqlAlert#custom_body}.

---

##### `CustomSubject`<sup>Optional</sup> <a name="CustomSubject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.customSubject"></a>

```go
CustomSubject *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#custom_subject SqlAlert#custom_subject}.

---

##### `EmptyResultState`<sup>Optional</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.emptyResultState"></a>

```go
EmptyResultState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#empty_result_state SqlAlert#empty_result_state}.

---

##### `Muted`<sup>Optional</sup> <a name="Muted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptions.property.muted"></a>

```go
Muted interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.80.0/docs/resources/sql_alert#muted SqlAlert#muted}.

---

## Classes <a name="Classes" id="Classes"></a>

### SqlAlertOptionsOutputReference <a name="SqlAlertOptionsOutputReference" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/sqlalert"

sqlalert.NewSqlAlertOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SqlAlertOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomBody">ResetCustomBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomSubject">ResetCustomSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetEmptyResultState">ResetEmptyResultState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetMuted">ResetMuted</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomBody` <a name="ResetCustomBody" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomBody"></a>

```go
func ResetCustomBody()
```

##### `ResetCustomSubject` <a name="ResetCustomSubject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetCustomSubject"></a>

```go
func ResetCustomSubject()
```

##### `ResetEmptyResultState` <a name="ResetEmptyResultState" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetEmptyResultState"></a>

```go
func ResetEmptyResultState()
```

##### `ResetMuted` <a name="ResetMuted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.resetMuted"></a>

```go
func ResetMuted()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBodyInput">CustomBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubjectInput">CustomSubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultStateInput">EmptyResultStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.mutedInput">MutedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.opInput">OpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBody">CustomBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubject">CustomSubject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultState">EmptyResultState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.muted">Muted</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.op">Op</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `CustomBodyInput`<sup>Optional</sup> <a name="CustomBodyInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBodyInput"></a>

```go
func CustomBodyInput() *string
```

- *Type:* *string

---

##### `CustomSubjectInput`<sup>Optional</sup> <a name="CustomSubjectInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubjectInput"></a>

```go
func CustomSubjectInput() *string
```

- *Type:* *string

---

##### `EmptyResultStateInput`<sup>Optional</sup> <a name="EmptyResultStateInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultStateInput"></a>

```go
func EmptyResultStateInput() *string
```

- *Type:* *string

---

##### `MutedInput`<sup>Optional</sup> <a name="MutedInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.mutedInput"></a>

```go
func MutedInput() interface{}
```

- *Type:* interface{}

---

##### `OpInput`<sup>Optional</sup> <a name="OpInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.opInput"></a>

```go
func OpInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `CustomBody`<sup>Required</sup> <a name="CustomBody" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customBody"></a>

```go
func CustomBody() *string
```

- *Type:* *string

---

##### `CustomSubject`<sup>Required</sup> <a name="CustomSubject" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.customSubject"></a>

```go
func CustomSubject() *string
```

- *Type:* *string

---

##### `EmptyResultState`<sup>Required</sup> <a name="EmptyResultState" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.emptyResultState"></a>

```go
func EmptyResultState() *string
```

- *Type:* *string

---

##### `Muted`<sup>Required</sup> <a name="Muted" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.muted"></a>

```go
func Muted() interface{}
```

- *Type:* interface{}

---

##### `Op`<sup>Required</sup> <a name="Op" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.op"></a>

```go
func Op() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.sqlAlert.SqlAlertOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() SqlAlertOptions
```

- *Type:* <a href="#@cdktf/provider-databricks.sqlAlert.SqlAlertOptions">SqlAlertOptions</a>

---



