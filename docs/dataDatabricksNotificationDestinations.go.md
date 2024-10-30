# `dataDatabricksNotificationDestinations` Submodule <a name="`dataDatabricksNotificationDestinations` Submodule" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataDatabricksNotificationDestinations <a name="DataDatabricksNotificationDestinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations"></a>

Represents a {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations databricks_notification_destinations}.

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

datadatabricksnotificationdestinations.NewDataDatabricksNotificationDestinations(scope Construct, id *string, config DataDatabricksNotificationDestinationsConfig) DataDatabricksNotificationDestinations
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig">DataDatabricksNotificationDestinationsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig">DataDatabricksNotificationDestinationsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putNotificationDestinations">PutNotificationDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetDisplayNameContains">ResetDisplayNameContains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetNotificationDestinations">ResetNotificationDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNotificationDestinations` <a name="PutNotificationDestinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putNotificationDestinations"></a>

```go
func PutNotificationDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.putNotificationDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayNameContains` <a name="ResetDisplayNameContains" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetDisplayNameContains"></a>

```go
func ResetDisplayNameContains()
```

##### `ResetNotificationDestinations` <a name="ResetNotificationDestinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetNotificationDestinations"></a>

```go
func ResetNotificationDestinations()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.resetType"></a>

```go
func ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataDatabricksNotificationDestinations resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

datadatabricksnotificationdestinations.DataDatabricksNotificationDestinations_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

datadatabricksnotificationdestinations.DataDatabricksNotificationDestinations_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

datadatabricksnotificationdestinations.DataDatabricksNotificationDestinations_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

datadatabricksnotificationdestinations.DataDatabricksNotificationDestinations_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataDatabricksNotificationDestinations resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataDatabricksNotificationDestinations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataDatabricksNotificationDestinations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataDatabricksNotificationDestinations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinations">NotificationDestinations</a></code> | <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList">DataDatabricksNotificationDestinationsNotificationDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContainsInput">DisplayNameContainsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinationsInput">NotificationDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `NotificationDestinations`<sup>Required</sup> <a name="NotificationDestinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinations"></a>

```go
func NotificationDestinations() DataDatabricksNotificationDestinationsNotificationDestinationsList
```

- *Type:* <a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList">DataDatabricksNotificationDestinationsNotificationDestinationsList</a>

---

##### `DisplayNameContainsInput`<sup>Optional</sup> <a name="DisplayNameContainsInput" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContainsInput"></a>

```go
func DisplayNameContainsInput() *string
```

- *Type:* *string

---

##### `NotificationDestinationsInput`<sup>Optional</sup> <a name="NotificationDestinationsInput" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.notificationDestinationsInput"></a>

```go
func NotificationDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `DisplayNameContains`<sup>Required</sup> <a name="DisplayNameContains" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.displayNameContains"></a>

```go
func DisplayNameContains() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinations.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataDatabricksNotificationDestinationsConfig <a name="DataDatabricksNotificationDestinationsConfig" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

&datadatabricksnotificationdestinations.DataDatabricksNotificationDestinationsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DisplayNameContains: *string,
	NotificationDestinations: interface{},
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.displayNameContains">DisplayNameContains</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.notificationDestinations">NotificationDestinations</a></code> | <code>interface{}</code> | notification_destinations block. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayNameContains`<sup>Optional</sup> <a name="DisplayNameContains" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.displayNameContains"></a>

```go
DisplayNameContains *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#display_name_contains DataDatabricksNotificationDestinations#display_name_contains}.

---

##### `NotificationDestinations`<sup>Optional</sup> <a name="NotificationDestinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.notificationDestinations"></a>

```go
NotificationDestinations interface{}
```

- *Type:* interface{}

notification_destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#notification_destinations DataDatabricksNotificationDestinations#notification_destinations}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#type DataDatabricksNotificationDestinations#type}.

---

### DataDatabricksNotificationDestinationsNotificationDestinations <a name="DataDatabricksNotificationDestinationsNotificationDestinations" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

&datadatabricksnotificationdestinations.DataDatabricksNotificationDestinationsNotificationDestinations {
	DestinationType: *string,
	DisplayName: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.destinationType">DestinationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#destination_type DataDatabricksNotificationDestinations#destination_type}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#display_name DataDatabricksNotificationDestinations#display_name}. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#id DataDatabricksNotificationDestinations#id}. |

---

##### `DestinationType`<sup>Optional</sup> <a name="DestinationType" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#destination_type DataDatabricksNotificationDestinations#destination_type}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#display_name DataDatabricksNotificationDestinations#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinations.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/databricks/databricks/1.56.0/docs/data-sources/notification_destinations#id DataDatabricksNotificationDestinations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataDatabricksNotificationDestinationsNotificationDestinationsList <a name="DataDatabricksNotificationDestinationsNotificationDestinationsList" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

datadatabricksnotificationdestinations.NewDataDatabricksNotificationDestinationsNotificationDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataDatabricksNotificationDestinationsNotificationDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get"></a>

```go
func Get(index *f64) DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference <a name="DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-databricks-go/databricks/v13/datadatabricksnotificationdestinations"

datadatabricksnotificationdestinations.NewDataDatabricksNotificationDestinationsNotificationDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDestinationType">ResetDestinationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetId">ResetId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationType` <a name="ResetDestinationType" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDestinationType"></a>

```go
func ResetDestinationType()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.resetId"></a>

```go
func ResetId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-databricks.dataDatabricksNotificationDestinations.DataDatabricksNotificationDestinationsNotificationDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



